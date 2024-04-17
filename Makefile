APP_CONTAINER_NAME = "shopware"

ssh: ## Connect with app container
	@docker exec -it $(APP_CONTAINER_NAME) bash



plugin-refresh:
	php bin/console plugin:refresh


create-default-user:
	php bin/console user:create --admin --email=thomas@doe.com --firstName="Thomas" --lastName="Doe" --password=root1234 --no-interaction roor

