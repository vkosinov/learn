# Авторизация

> Изучить возможные способы авторизации и аутентификации в клиент-серверном приложении — передача данных через cookie, через тело
> запроса, получение сессионных ключей.

Реализовал авторизацию с передачей данных:

- через cookie: [клиентская часть](https://github.com/vkosinov/learn/blob/main/src/js/authentication/cookie/frontend), [темная сторона](https://github.com/vkosinov/learn/blob/main/src/js/authentication/cookie/backend)

- через заголовок: [frontend](https://github.com/vkosinov/learn/blob/main/src/js/authentication/header/app), [backend](https://github.com/vkosinov/learn/blob/main/src/js/authentication/header/api)

- сессии: [frontend](https://github.com/vkosinov/learn/blob/main/src/js/authentication/session/app), [backend](https://github.com/vkosinov/learn/blob/main/src/js/authentication/session/api)

> Отдельно изучить сценарии регистрации нового пользователя,
> хранения авторизационных данных в БД, восстановления пароля.

В качестве БД использовал mongodb, для примера и тренировки реализовал методы: для регистрации пользователей, для получения списка пользователей, восстановление/смена пароля (сгенерированная ссылка не отправляется через email, формируется под формой), страницу с комментариями (использовалась для тренировки с XSS).

Для отображения каждого из примеров использую [статичные html файлы](https://github.com/vkosinov/learn/blob/main/src/public), с разными для каждого сценария js файлами.

Для серверной части использовал Node.js c express (да будет благословен тот кто пишет без express)

> Какие возможные векторы атаки на каждый вариант передачи данных? Для демонстрации сценариев атаки и способов защиты собрать небольшой проект с клиентской и серверной частями, реализующими разные сценарии авторизации и показать, как будет работать перехват данных пользователя, как ими может воспользоваться злоумышленник.

1. Авторизация через cookie

Файл cookie может быть украден:

- если cookie без флага httpOnly и на сайте есть _XSS_ уязвимость
- если не установлен sameSite через _CSRF_
