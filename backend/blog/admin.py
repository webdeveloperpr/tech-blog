from django.contrib import admin
from blog.models import (
    Category,
    Image,
    PostImage,
    PostCategory,
    Post,
)


class PostImageInline(admin.TabularInline):
    model = PostImage
    extra = 0


class PostCategoryInline(admin.TabularInline):
    model = PostCategory
    extra = 0


class PostAdmin(admin.ModelAdmin):
    inlines = (
        PostImageInline,
        PostCategoryInline,
    )


class ImageAdmin(admin.ModelAdmin):
    list_display = ('image_tag')


# Register your models here.
admin.site.register(Category)
admin.site.register(Image)
admin.site.register(Post, PostAdmin)
