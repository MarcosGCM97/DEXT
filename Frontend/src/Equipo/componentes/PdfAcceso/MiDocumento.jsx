import { Page, Text, View, Document, StyleSheet }  from '@react-pdf/renderer'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    paddingTop: 30,
  },
  section: {
    width: '100%',
    height: '50%',
    margin: 10,
    padding: 10,
    flexGrow: 1,
    flexDirection:'row',
    justifyContent: 'center',
    gap: 5,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,

  },
  columnNum: {
    width: '10%',
    border: '3px solid black',
    padding: 5,
  },
  column: {
    width: '30%',
    border: '3px solid black',
    padding: 5,
  },
  filaTitulo: {
    borderBottom: '5px solid black',
    width: '100%',
  },
  fila: {
    borderBottom: '2px solid black',
    width: '100%',
  }
})

function MiDocumento({ equipo }){
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Lista de Jugadores</Text>
        <View style={styles.section}>
          <View  style={styles.columnNum}>
            <Text style={styles.filaTitulo}>Num</Text>
            {
              equipo.map((jugador, i) => (
                <Text style={styles.fila} key={i}>{jugador.numero}</Text>
              ))
            }
          </View>
          <View  style={styles.column}>
            <Text style={styles.filaTitulo}>Nombre</Text>
            {
              equipo.map((jugador, i) => (
                <Text style={styles.fila} key={i}>{jugador.nombre}</Text>
              ))
            }
          </View >
          <View style={styles.column}>
            <Text style={styles.filaTitulo}>Posicion</Text>
            {
              equipo.map((jugador, i) => (
                <Text style={styles.fila} key={i}>{jugador.posicion}</Text>
              ))
            }

          </View>
        </View>
      </Page>
    </Document>
  )
}

MiDocumento.propTypes = {
  equipo: PropTypes.array.isRequired
}
export default MiDocumento