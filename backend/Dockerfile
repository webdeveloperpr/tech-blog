# Use an official Python runtime as a parent image
FROM python:3.6

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /usr/src/backend

# Install Python dependencies
COPY requirements.txt /usr/src/backend
RUN pip3 install --upgrade pip -r requirements.txt

# Add the rest of the code
COPY . /usr/src/backend

# Make port 8000 available for the app
EXPOSE 8000

RUN export alias pip="pip3"
RUN export alias python="python3"

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python manage.py runserver 0.0.0.0:8000
