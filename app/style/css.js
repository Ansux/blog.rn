import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0, 0.1)',
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 6,
    flex: 1
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6
  },
  itemHeader: {
    fontSize: 18,
    fontWeight: '300',
    color: '#999',
    marginBottom: 6
  },
  itemMeta: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
    marginBottom: 6
  },
  redText: {
    color: '#f30',
    fontSize: 15
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 110
  },
  itemText: {

  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  bannderCircle: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    height: 26,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    paddingLeft: 6,
    paddingRight: 6,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  }
});

export {styles as default}