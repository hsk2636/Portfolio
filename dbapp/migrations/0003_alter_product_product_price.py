# Generated by Django 5.1.2 on 2024-10-22 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbapp', '0002_myshop'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_price',
            field=models.DecimalField(decimal_places=0, max_digits=10),
        ),
    ]