from django.db import models
from ckeditor.fields import RichTextField


class JobTag(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.title


class Job(models.Model):

    EMPLOYMENT_TYPES = [
        ('FT', 'Full-Time'), ('PT', 'Part-Time'), ('C', 'Contract')
    ]

    EXPERIENCE_REQUIRED = [('Entry', 'Entry-Level'), ('Mid', 'Mid-Level'), ('Senior', 'Senior-Level')]

    title = models.CharField(max_length=255)
    description = RichTextField()
    responsibilities = RichTextField()
    qualifications = RichTextField()
    benefits = RichTextField()
    employment_type = models.CharField(max_length=2, choices=EMPLOYMENT_TYPES)
    salary_description = RichTextField() # Here we describe what the salary structure will be (e.g. minimum, maximum, piece-rate, etc.)
    location = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    posted_on = models.DateTimeField(auto_now_add=True)
    application_deadline = models.DateTimeField(null=True, blank=True)  # Deadline for applications
    experience_level = models.CharField(max_length=50, choices=EXPERIENCE_REQUIRED, default='Entry')  # Experience level required
    slug = models.SlugField(unique=True, max_length=255)  # SEO-friendly URLs for job postings
    tags = models.ManyToManyField(JobTag, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.title} - {self.experience_level}"



class JobApplication(models.Model):
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255) # check this field on the frontend and make sure you give the user the option to save this info in the browser
    last_name = models.CharField(max_length=255) # check this field on the frontend and make sure you give the user the option to save this email info in the browser
    email = models.EmailField()  # check this field on the frontend and make sure you give the user the option to save their email info in the browser
    linkedin_profile_url = models.CharField(max_length=2083) # check this field on the frontend and make sure you give the user the option to save this info in the browser
    additional_info = RichTextField() # check this field for the max characters on the frontend
    submitted_time = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"{self.submitted_time}: {self.first_name} {self.last_name} applied for {self.job.title}"
