# actual code starts here
define [
], (
) ->
  class Templates

    @getHomePage: (data) -> "
        <!DOCTYPE html>
        <html>
        <body>

        <img src=\'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=#{data}\' alt=\'Smiley face\' width=\'150\' height=\'150\'>

        </body>
        </html>
      "
