# Generated by Django 5.1.6 on 2025-05-10 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('photo', models.ImageField(upload_to='doctor_photos/')),
                ('license_number', models.CharField(max_length=6, unique=True)),
                ('qualification', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('college_name', models.CharField(max_length=150)),
            ],
        ),
    ]
