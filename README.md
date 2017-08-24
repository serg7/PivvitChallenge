Installation:

- composer update
- php bin/console doctrine:database:create
- php bin/console doctrine:schema:update --force

Create user:

php bin/console fos:user:create adminuser --super-admin