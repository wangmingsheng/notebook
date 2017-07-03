// #!/usr/bin/env node

import app from '../app'

app.set('port', process.env.PORT || 3000)

const port = app.get('port')
const server = app.listen(port, () => {
    console.log('------ Express server listening on port ' + server.address().port + ' ------')
})