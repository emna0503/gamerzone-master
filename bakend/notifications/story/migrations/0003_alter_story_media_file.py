# Generated by Django 5.0.2 on 2024-04-28 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('story', '0002_alter_story_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='story',
            name='media_file',
            field=models.FileField(default='2024-01-01', upload_to='media/story/'),
            preserve_default=False,
        ),
    ]
