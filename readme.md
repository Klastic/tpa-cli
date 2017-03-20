<!--<h1 align="center">
	<br>
	<br>
	<img width="360" src="" alt="chalk">
	<br>
	<br>
	<br>
</h1>-->

> A CLI for Twitter's PIN-based authorization

<!--[![Build Status]()]()
[![Coverage Status]()]()-->

If you are in need of a CLI tool for PIN-based authorization for your twitter app this package is for you. With a few quick commands, you will be able to get a Token Key and Token Secret for your app to ack on behalf of the user.

## Install

```
$ npm i tpa-cli -g
```


## Usage

1. Install tpa-cli
2. Add Consumer Key (setKey)
3. Add Consumer Secret (setSecret)
4. Run auth flow (auth)

**tpa [command]**

Commands:

    setKey [key]        Sets the Consumer Key
    setSecret [secret]  Sets the Consumer Secret
    auth                Generates an OAuth URL and waits for the PIN to be entered to authorize the account.
    help [cmd]          display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

## Exapmle

    $ npm i tpa-cli -g
    $ tpa setKey kA6s14WcPTP9X3Bz5bAuAeEcV
    $ tpa setSecret B3cK4DxesNYXB7sMlV1P1R3v2b9AA8L3kmG5U3fCrG683R3KDo
    $ tpa auth
    Authorization URL: https://twitter.com/oauth/authorize?oauth_token=sD3OuQEEEEEEzZdYEMABWshY1IN
    Enter pin  1639493
    Your Access Token Key: 4937231751-Sw1TyfuULWQIif8jcenoSU4d34eoep9bsexfUxG
    Your Access Token Secret: Snc2x9ySGtEDxBxgMWPQ5dI9hjSEcjnEDse23KSHW8e91

## License

MIT License