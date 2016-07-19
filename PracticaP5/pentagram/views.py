from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pentagram.models import Photo, Comment, Like
from pentagram.serializers import PhotoSerializer, UserSerializer, CommentSerializer


# Create your views here.
@api_view(["GET", "POST"])
def photos(request):
    if request.method == 'GET':
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == 'POST':
        photo_serializer = PhotoSerializer(data=request.data)
        if photo_serializer.is_valid():
            photo_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=photo_serializer.errors)


@api_view(['POST'])
def users(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=user_serializer)


@api_view(['GET', 'POST'])
def comments(request, id_photo):
    if request.method == 'GET':
        comments = Comment.objects.filter(photo=id_photo)
        serializer = CommentSerializer(comments, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)
    if request.method == 'POST':
        request.POST['photo'] = id_photo
        comment_serializer = CommentSerializer(data=request.data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST, data=comment_serializer.errors)


@api_view(['GET', 'POST'])
def like(request, id_photo):
    if request.method == 'GET':
        counter = Like.objects.filter(photo_id=id_photo).count()
        return Response(status=status.HTTP_302_FOUND, data=counter)
    if request.method == 'POST':
        if not (Like.objects.filter(photo=id_photo, user=request.user.id).count() == 0):
            Like.objects.filter(photo=id_photo, user=request.user.id).delete()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        else:
            Like.objects.create(photo_id=id_photo, user=request.user).save()
            return Response(status=status.HTTP_201_CREATED)
