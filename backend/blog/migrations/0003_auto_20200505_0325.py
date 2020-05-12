# Generated by Django 3.0.5 on 2020-05-05 03:25

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20200505_0026'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='editor_html',
        ),
        migrations.RemoveField(
            model_name='post',
            name='editor_state',
        ),
        migrations.AlterField(
            model_name='post',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True),
        ),
    ]