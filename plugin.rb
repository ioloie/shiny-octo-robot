# name: shiny-octo-robot
# about: Discourse etsts
# version: 1
# authors: ioloie

# Allow iFrame embedding:
Rails.application.config.action_dispatch.default_headers.merge!({'X-Frame-Options' => 'ALLOWALL'})

register_asset "javascripts/singlesignout.js"