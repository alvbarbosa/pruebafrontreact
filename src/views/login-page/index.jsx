import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import './login-page.css'

const LoginPage = props => {
  const { error, reset } = props
  return (
    <div className="container">
      <Card className="card">
        <CardHeader
          title="Ingresar"
          className="card-header"
        >
          cabecera
        </CardHeader>
        <CardContent>
          {props.fields()}
          {error && <strong>{error}</strong>}
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" size="small" color="primary">
            Iniciar Sesión
        </Button>
          <Button variant="outlined" size="small" color="primary" onClick={reset}>
            Cancelar
        </Button>
        </CardActions>
      </Card>
    </div>
  )
}

LoginPage.propTypes = {
  fields: PropTypes.func.isRequired
}

export default LoginPage

