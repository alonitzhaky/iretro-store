# Generated by Django 4.1.5 on 2023-02-10 16:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0004_remove_orderdetail_products_orderdetail_product"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="orderdetail",
            name="quantity",
        ),
    ]
