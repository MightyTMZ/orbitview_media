from django.db import models
from django.utils.text import slugify
from datetime import timedelta
from ckeditor.fields import RichTextField


class Annoucement(models.Model):
    title = models.CharField(max_length=255)
    cover_img = models.CharField(max_length=2083)
    """For future reference, we may use a CDN hosted externally,
      thus images come in the form of URLs"""
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self) -> str:
        return f"{self.title}"
    

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    profile_picture_url = models.CharField(max_length=2083)

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


class Article(models.Model):
    title = models.CharField(max_length=255, unique=True)
    # Since slug comes from title, the slug must also be unique
    subtitle = models.CharField(max_length=355, default="") # derived idea from Substack
    slug = models.SlugField(default="-", editable=False, max_length=250)
    content = RichTextField()
    authors = models.ManyToManyField(Author)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField(null=True, blank=True)
    is_published = models.BooleanField(default=False)
    featured_image = models.ImageField(upload_to='articles/%Y/%m/%d/', blank=True, null=True)

    # along with the Substack, Medium, or other APIs, users can read articles on our main website

    def __str__(self) -> str:
        article_authors = self.authors
        author_str = f"{article_authors[0].first_name} {article_authors[0].last_name}"

        if len(article_authors) == 1:
            return f"'{self.title}'by {author_str}"
        else:
            authors_str = ""
            for author in article_authors:
                authors_str += f"{author.first_name} {author.last_name}, "

            return f"'{self.title}' by {author_str}"

        

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)

        if self.updated_at is not None and self.created_at is not None:
            if self.updated_at - self.created_at < timedelta(minutes=10):
                self.updated_at = self.created_at
                super().save(update_fields=['updated_at'])

        super().save(*args, **kwargs)

        # Django is very picky when it comes to datetime, so we must ensure that minute differences in \
        # creation/update is not a problem

    def get_article_url(self):
        return f'/{self.created_at.date()}/{self.slug}/'

    class Meta:
        ordering = ["-created_at"]
