# Build the project
echo "Building the project..."
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3.12 get-pip.py
python3.12 -m pip install -r requirements.txt
mv django-cf /python312/lib/python3.12/site-packages/django/db/backends/

echo "Make Migration..."
python3.12 manage.py makemigrations --noinput
python3.12 manage.py migrate --noinput

echo "Collect Static..."
python3.12 manage.py collectstatic --noinput --clear