# Generated by Django 5.0.6 on 2024-05-10 11:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0010_alter_grouppost_approval_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grouppost',
            name='group',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='groups.group'),
        ),
        migrations.AlterField(
            model_name='grouppost',
            name='id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]
