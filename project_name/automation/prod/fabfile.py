"""
Fabric file to upload this project to DigitalOcean.
Ensure that Fabric is installed (under a virtualenv with 
python 2 interpreter) and then run "fab birth_to_final".
"""

from fabric.api import env, local, task
from fabric.operations import prompt


##############
# DEPLOYMENT #
##############

@task
def vps_birth():
    # -k prompts for root password
    local('ansible-playbook deploy_root.yml -k')


@task
def vps_setup():
    # -K prompts for user's password (in order to become root)
    local('ansible-playbook deploy_user.yml -K')


@task
def vps_setup_step():
    # -K prompts for user's password, --step prompts to skip or run each task
    local('ansible-playbook deploy_user.yml -K --step')

    
@task
def vps_birth_step():
    # -k prompts for root password
    local('ansible-playbook deploy_root.yml -k --step')


@task
def birth_to_final():
    vps_birth()
    vps_setup()
