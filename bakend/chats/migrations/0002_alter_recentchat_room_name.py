# Generated by Django 5.0.6 on 2024-05-09 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recentchat',
            name='room_name',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
    ]
