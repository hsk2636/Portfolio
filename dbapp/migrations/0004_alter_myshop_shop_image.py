# Generated by Django 5.1.2 on 2024-10-22 20:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbapp', '0003_alter_product_product_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='myshop',
            name='shop_image',
            field=models.ImageField(blank=True, null=True, upload_to='shop_images/'),
        ),
    ]
