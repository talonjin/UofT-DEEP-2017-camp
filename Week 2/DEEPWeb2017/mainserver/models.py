# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class UserProfile(models.Model):
    userName = models.CharField(max_length = 64)
    description = models.CharField(max_length = 256)
    gpa = models.DecimalField(max_digits = 10, decimal_places = 5)


