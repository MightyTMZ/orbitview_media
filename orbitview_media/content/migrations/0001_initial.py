# Generated by Django 5.1 on 2024-08-21 03:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Annoucement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('cover_img', models.CharField(max_length=2083)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('profile_picture_url', models.CharField(max_length=2083)),
            ],
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('file', models.FileField(upload_to='uploads/')),
                ('description', models.TextField(blank=True, null=True)),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('subtitle', models.CharField(default='', max_length=355)),
                ('slug', models.SlugField(default='-', editable=False, max_length=250)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField(blank=True, null=True)),
                ('is_published', models.BooleanField(default=False)),
                ('featured_image', models.ImageField(blank=True, null=True, upload_to='articles/%Y/%m/%d/')),
                ('authors', models.ManyToManyField(to='content.author')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='HeadingBlock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=255)),
                ('type', models.CharField(default='heading block', max_length=50)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='heading_blocks', to='content.article')),
            ],
        ),
        migrations.CreateModel(
            name='ImageBlock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='articles/images/%Y/%m/%d/')),
                ('caption', models.CharField(blank=True, max_length=1500)),
                ('type', models.CharField(default='image block', max_length=50)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='image_blocks', to='content.article')),
            ],
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=2083)),
                ('img_icon_url', models.CharField(max_length=2083)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='external_links', to='content.article')),
            ],
        ),
        migrations.CreateModel(
            name='TextBlock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('type', models.CharField(default='text block', max_length=50)),
                ('order', models.PositiveIntegerField(default=0)),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='text_blocks', to='content.article')),
            ],
        ),
    ]