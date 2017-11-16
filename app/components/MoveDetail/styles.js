export default {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 25
  },
  rows: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    // height: 50
  },
  row: {
    // flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  cell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  label: {
    fontSize: 16,
    color: '#234885'
  },
  value: {
    fontSize: 16,
    color: '#cd3754'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    marginBottom: 30
  },
  goButton: {
    width: 0.8 * window.width,
    backgroundColor: '#264b7f',
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goButtonText: {
    color: 'white',
    fontSize: 20,
  },
  divider: {
	backgroundColor: '#59568f', 
	marginVertical: 10
  }
  
};
