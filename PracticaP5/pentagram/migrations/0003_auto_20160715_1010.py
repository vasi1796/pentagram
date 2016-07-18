# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import pentagram.models


class Migration(migrations.Migration):

    dependencies = [
        ('pentagram', '0002_comment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='photo_id',
            new_name='photo',
        ),
        migrations.AlterField(
            model_name='comment',
            name='comment',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(null=True, upload_to=pentagram.models.photos_directory),
        ),
    ]
