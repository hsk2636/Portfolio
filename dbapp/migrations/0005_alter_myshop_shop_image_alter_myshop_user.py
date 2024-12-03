# Generated by Django 5.1.2 on 2024-10-22 20:33

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbapp', '0004_alter_myshop_shop_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myshop',
            name='shop_image',
            field=models.ImageField(blank=True, default='shop_images/default_image.png', null=True, upload_to='shop_images/'),
        ),
        migrations.AlterField(
            model_name='myshop',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='db_myshop', to=settings.AUTH_USER_MODEL),
        ),
    ]