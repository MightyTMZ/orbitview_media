# Generated by Django 5.1 on 2024-10-11 23:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0003_alter_article_featured_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='label',
            field=models.CharField(choices=[('B', 'Blog'), ('TA', 'Technical Article'), ('WP', 'White Paper')], default='B', max_length=5),
        ),
    ]
