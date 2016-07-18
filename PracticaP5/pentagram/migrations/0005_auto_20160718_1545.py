# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import django.contrib.auth.models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0006_require_contenttypes_0002'),
        ('pentagram', '0004_auto_20160718_1046'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_ptr', models.OneToOneField(parent_link=True, primary_key=True, auto_created=True, to=settings.AUTH_USER_MODEL, serialize=False)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.RenameField(
            model_name='comment',
            old_name='photo_id',
            new_name='photo',
        ),
    ]
