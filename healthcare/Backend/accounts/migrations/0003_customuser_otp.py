# Generated by Django 5.1.4 on 2024-12-22 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "accounts",
            "0002_alter_customuser_options_alter_customuser_managers_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="customuser",
            name="otp",
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]