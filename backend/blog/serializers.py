from rest_framework import serializers
from blog.models import (
    Category,
    Post,
    Image,
)


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['id', 'image']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class PostSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True,)
    images = ImageSerializer(many=True,)

    class Meta:
        model = Post
        fields = [
            'id',
            'categories',
            'images',
            'title',
            'slug',
            'content',
        ]
