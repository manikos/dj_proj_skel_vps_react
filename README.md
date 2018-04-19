# GENERAL

This project structure is in active development and continuously evolves. It uses the magnificent batteries-included super-fast template [Jinja2](http://jinja.pocoo.org/docs/2.10/)
and the wrapper around it (to make our lives easier) [django-jinja](https://niwinz.github.io/django-jinja/latest/).
It uses the fabulous command-like tool [Fabric](http://www.fabfile.org/) and the awesome IT automation tool [Ansible](http://docs.ansible.com/ansible/latest/index.html) that together
work like a charm. 


# INSTALLATION

## First part

- Because Fabric works under Python 2, I always have a virtualenv in my PC with python 2 and fabric installed under it.
- Ansible is globally installed in my PC, so no worries

So:

1. Ensure that [Ansible](http://docs.ansible.com/ansible/latest/intro_installation.html) is installed globally on your machine. `sudo pip install ansible`
2. Create a virtual environment (using [pipenv](http://pipenv.readthedocs.io/en/latest/basics/) or [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/)) with 
python 2 as the default interpreter. I would name this env it *deploy*.
3. Install Fabric: `pip install fabric`
4. This env should be activated, each time a fabric command is executed.

## Second part

1. Create another virtualenv that will hold your project-specific dependencies (like django, psycopg2 etc).
2. Install django under this env: `pip install django`
3. Run: `django-admin startproject --template https://github.com/manikos/django_skeleton_vps_react/archive/master.zip --extension py,json,js --name constants.yml your_project_name`
4. Install requirements (inside the virtualenv, of course): `pip install -r requirements/base.txt`


# STRUCTURE

After project created in your desired (local) directory, you can delete the README.md file from your directory.

The produced project structure looks like this:

<pre>
proj
├── gitignore
├── logs
│   ├── db.log
│   ├── dev.log
│   ├── my_apps.log
│   └── production.log
├── manage.py
├── media_root
│   └── README.md
├── myutils
│   ├── admin.py
│   ├── apps.py
│   ├── context_processors.py
│   ├── __init__.py
│   ├── locale
│   │   └── el
│   │       └── LC_MESSAGES
│   │           └── README.md
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── templatetags
│   │   ├── __init__.py
│   │   ├── myutils_filters.py
│   │   └── myutils_tags.py
│   ├── tests.py
│   └── views.py
├── proj
│   ├── automation
│   │   ├── dev
│   │   │   ├── fabfile.py
│   │   └── prod
│   │       ├── ansible.cfg
│   │       ├── deploy_root.yml
│   │       ├── deploy_user.yml
│   │       ├── fabfile.py
│   │       ├── group_vars
│   │       │   └── constants.yml
│   │       ├── hosts
│   │       └── roles
│   │           ├── birth
│   │           │   ├── handlers
│   │           │   │   └── main.yml
│   │           │   └── tasks
│   │           │       ├── after_startup.yml
│   │           │       ├── main.yml
│   │           │       └── on_startup.yml
│   │           └── setup
│   │               ├── handlers
│   │               │   └── main.yml
│   │               ├── tasks
│   │               │   ├── application.yml
│   │               │   ├── bitbucket.yml
│   │               │   ├── database.yml
│   │               │   ├── gateway_server.yml
│   │               │   ├── main.yml
│   │               │   ├── system.yml
│   │               │   ├── virtualenv.yml
│   │               │   └── web_server.yml
│   │               └── templates
│   │                   ├── bash_aliases.j2
│   │                   ├── vimrc.j2
│   │                   ├── jail.local.j2
│   │                   ├── nginx.conf.j2
│   │                   ├── nginx_sites_avail.j2
│   │                   ├── pyenvrc.j2
│   │                   ├── uwsgi.ini.j2
│   │                   └── uwsgi.service.j2
│   ├── __init__.py
│   ├── locale
│   │   └── el
│   │       └── LC_MESSAGES
│   ├── settings
│   │   ├── base.py
│   │   ├── __init__.py
│   │   ├── local.py
│   │   ├── production.py
│   │   └── secret.json
│   ├── urls.py
│   └── wsgi.py
├── README.md
├── requirements.txt
├── robots.txt
├── static/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
├── static_root
│   └── README.md
└── templates
    └── base
        └── base.html
</pre>


# TOOLS USED

1. Python 3.6.4
2. Fabric (for running development-related and production-related commands)
3. Ansible 2.4 (for automation of deployment)


# TO DO

The next thing I like to build is a [docker](https://www.docker.com/)-ready fully functional website, batteries included.

