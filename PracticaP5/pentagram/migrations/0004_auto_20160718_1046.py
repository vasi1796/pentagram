# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pentagram', '0003_auto_20160715_1010'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='photo',
            new_name='photo_id',
        ),
        migrations.AlterField(
            model_name='photo',
            name='counter_like',
            field=models.IntegerField(default=0),
        ),
    ]
