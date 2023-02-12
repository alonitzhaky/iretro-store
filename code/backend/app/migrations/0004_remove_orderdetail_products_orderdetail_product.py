# Generated by Django 4.1.5 on 2023-02-10 16:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0003_remove_orderdetail_total"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="orderdetail",
            name="products",
        ),
        migrations.AddField(
            model_name="orderdetail",
            name="product",
            field=models.ForeignKey(
                null=True, on_delete=django.db.models.deletion.PROTECT, to="app.product"
            ),
        ),
    ]
