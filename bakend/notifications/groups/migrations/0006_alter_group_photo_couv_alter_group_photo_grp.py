# Generated by Django 5.0.2 on 2024-04-23 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0005_alter_group_members_alter_group_super_admin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='photo_couv',
            field=models.FileField(default='a', upload_to='media/group/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='group',
            name='photo_grp',
            field=models.FileField(default='aa.png', upload_to=''),
            preserve_default=False,
        ),
    ]
