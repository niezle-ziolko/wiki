FROM python:slim-bullseye

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN python manage.py makemigrations
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

CMD ["gunicorn", "wiki.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]