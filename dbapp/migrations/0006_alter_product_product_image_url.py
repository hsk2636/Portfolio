# Generated by Django 5.1.2 on 2024-10-27 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbapp', '0005_alter_myshop_shop_image_alter_myshop_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_image_url',
            field=models.ImageField(blank=True, null=True, upload_to='product_images/'),
        ),
    ]
