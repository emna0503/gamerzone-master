# Generated by Django 3.2.4 on 2021-08-16 14:47

from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_alter_user_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='picture',
            field=models.ImageField(default='default.jpg', upload_to='maps', verbose_name='Picture'),
        ),
    ]
