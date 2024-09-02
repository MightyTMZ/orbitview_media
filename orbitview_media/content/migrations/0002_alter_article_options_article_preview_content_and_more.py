# Generated by Django 5.1 on 2024-09-01 03:18

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="article",
            options={},
        ),
        migrations.AddField(
            model_name="article",
            name="preview_content",
            field=ckeditor.fields.RichTextField(default=""),
        ),
        migrations.AlterField(
            model_name="article",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="article",
            name="updated_at",
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]