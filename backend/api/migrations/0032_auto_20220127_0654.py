# Generated by Django 3.2.11 on 2022-01-27 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0031_auto_20220127_0032"),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.RemoveField(
                    model_name="categorytype",
                    name="project",
                ),
                migrations.AlterUniqueTogether(
                    name="relationtypes",
                    unique_together=None,
                ),
                migrations.RemoveField(
                    model_name="relationtypes",
                    name="project",
                ),
                migrations.RemoveField(
                    model_name="spantype",
                    name="project",
                ),
            ],
            database_operations=[],
        )
    ]