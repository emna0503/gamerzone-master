# Generated by Django 5.0.2 on 2024-05-08 12:05

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0009_alter_grouppost_approval_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouppost',
            name='approval_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]