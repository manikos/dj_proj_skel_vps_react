"""
Custom methods for Jinja2 defined inside
['OPTIONS']['globals'] dict key setting.
"""
from django.conf import settings
from django.utils.translation import get_language_info as gli


def get_language_info(languages=settings.LANGUAGES):
    """
    Returns a dict of language info using the get_language_info of the
    utils.translation module.
    :param tuple languages: a tuple of tuples ('lang_code', 'lang_name')
    :return: dict
    """
    info = [gli(lang[0]) for lang in languages]
    return info
