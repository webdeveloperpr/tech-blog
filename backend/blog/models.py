from django.db import models
from django.utils.safestring import mark_safe
from ckeditor_uploader.fields import RichTextUploadingField


class Timestamp():
    """Will Create timeseamp fields on all models
    """
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)


class Image(models.Model, Timestamp):
    """Will Create an Image Field

    Arguments:
        models {Model} -- django Model class.
        Timestamp {Timestamp} -- Class with timestamp properties.
    """
    image = models.ImageField(upload_to='images')


class Category(models.Model, Timestamp):
    name = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.name


class Post(models.Model, Timestamp):
    """[summary]

    Arguments:
        models {Model} -- django Model class.
        Timestamp {Timestamp} -- Class with timestamp properties.

    Returns:
        [type] -- [description]
    """
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    content = RichTextUploadingField(blank=True)
    categories = models.ManyToManyField(
        Category,
        through='PostCategory',
        through_fields=('post_id', 'category_id',),
    )
    images = models.ManyToManyField(
        Image,
        through='PostImage',
        through_fields=('post_id', 'image_id',),
    )

    def __str__(self):
        return self.title


class PostCategory(models.Model):
    """[summary]

    Arguments:
        models {Model} -- [description]
    """
    class Meta:
        unique_together = (('post_id', 'category_id'),)

    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class PostImage(models.Model):
    """[summary]

    Arguments:
        models {Model} -- [description]
    """
    class Meta:
        unique_together = (('post_id', 'image_id',),)

    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    image_id = models.ForeignKey(Image, on_delete=models.CASCADE)
