import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import { addDoc, collection } from "firebase/firestore";
import db from '../firebaseConfig'


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function Products(props) {
  const [open, setOpen] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const [value, setValue] = React.useState("");

  const addProduct = async (event) => {
    handleChange()
    try {
      const docRef = await addDoc(collection(db, "Products"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  const handleClickOpen = () => {
    setOpen(true);
    setOpenDetails(true);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenDetails(false);
  };

  var actions = [
    {
      icon: VisibilityIcon,
      tooltip: 'View Ticket',
      onClick: (props) => setOpenDetails(true),
      // value={props.value}
    },
    {
      icon: DeleteIcon,
      hidden: props.contractId === 'nocontact' ? true : false,
      tooltip: 'Update Ticket',
      onClick: async (event, rowData) => {
        console.log(rowData)
      }
    },
    {
      icon: EditIcon,
      tooltip: 'Create a new Row',
      onClick: (event) => {
        // let Agent_Adviser = props.user && this.props.user.username ? this.props.user.username : ""
        // let defaultTemplate = this.props.defaultTemplate && this.props.defaultTemplate.templateId ? this.props.defaultTemplate.templateId : this.props.editTemplates[0] ? this.props.editTemplates[0].templateId : "notemplateavailable"
        // this.setState({ details: { ContactId: this.props.contactId, Agent_Adviser__c: Agent_Adviser}, defaultTemplate: defaultTemplate, isTicketUpdate: false })
        // this.props.addToSearchUserState('breadcrumbs', [...this.props.breadcrumbs, 'Create Ticket'])
        // this.props.addToSearchUserState('action', 'create')
      }
    },
    {
      icon: AddIcon,
      tooltip: "Add Row",
      position: "toolbar",
      onClick: () => setOpen(true)
    }
  ];
  return (
    <div className="wrapper">
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Client</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="designcode"
              label="Design Code"
              type="text"
              fullWidth
              variant="outlined"
              value={props.designCode}
              style={{ marginBottom: '13px' }}
              value={props.value}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="comment"
              label="Comment"
              type="text"
              fullWidth
              variant="outlined"
              value={props.designCode}
              style={{ marginBottom: '13px' }}
              value={props.value}
              onChange={handleChange}
            />
            <TextField
              type="file"
              fullWidth
              style={{ marginBottom: '13px' }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="createDate"
              type="date"
              fullWidth
              variant="outlined"
              value={props.createDate}
              style={{ marginBottom: '13px' }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="clientFeedback"
              label="Client Feedback"
              type="text"
              fullWidth
              variant="outlined"
              value={props.clientFeedback}
              style={{ marginBottom: '13px' }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="deliveryStatus"
              label="Delivery Status"
              type="text"
              fullWidth
              variant="outlined"
              value={props.clientFeedback}
              style={{ marginBottom: '13px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={addProduct}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog open={openDetails} onClose={handleClose}>
          <DialogTitle>Product View</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <img src="https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp" />
              </Grid>
              <Grid item xs={6} style={{ fontWeight: 'bold', paddingLeft: '105px', paddingTop: '10px', paddingBottom: '15px' }}>
                Design Code:
              </Grid>
              <Grid item xs={6} style={{ paddingTop: '10px', paddingBottom: '15px' }}>
                A1243
              </Grid>
              <Grid item xs={6} style={{ fontWeight: 'bold', paddingLeft: '105px', paddingTop: '10px', paddingBottom: '15px' }}>
                Comment:
              </Grid>
              <Grid item xs={6} style={{ paddingTop: '10px', paddingBottom: '15px' }}>
                This is comment section.
              </Grid>
              <Grid item xs={6} style={{ fontWeight: 'bold', paddingLeft: '105px', paddingTop: '10px', paddingBottom: '15px' }}>
                Created Date:
              </Grid>
              <Grid item xs={6} style={{ paddingTop: '10px', paddingBottom: '15px' }}>
                24/11/2021
              </Grid>
              <Grid item xs={6} style={{ fontWeight: 'bold', paddingLeft: '105px', paddingTop: '10px', paddingBottom: '15px' }}>
                Client Feedback:
              </Grid>
              <Grid item xs={6} style={{ paddingTop: '10px', paddingBottom: '15px' }}>
                Good
              </Grid>
              <Grid item xs={6} style={{ fontWeight: 'bold', paddingLeft: '105px', paddingTop: '10px', paddingBottom: '15px' }}>
                Delivery Status:
              </Grid>
              <Grid item xs={6} style={{ paddingTop: '10px', paddingBottom: '15px' }}>
                Good
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
      <MaterialTable
        title="My Clients"
        columns={[
          { title: "Style No.", field: "designCode" },
          {
            title: "Design",
            field: "imageUrl",
            render: (rowData) => (
              <img
                src={rowData.imageUrl}
              // style={{ width: 250, borderRadius: 150 }}
              />
            )
          },
          { title: "Comment", field: "comment" },
          { title: "Created Date", field: "cdate" },
          { title: "Client Feedback", field: "clientFeedBack" },
          { title: "Delivery Status", field: "deliveryStatus" },
        ]}
        data={[
          {
            designCode: 'W123',
            comment: 'This is comment section',
            cdate: "21/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'Q122',
            comment: 'This is comment section',
            cdate: "22/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl:
              "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'B134',
            comment: 'This is comment section',
            cdate: "23/12/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'B908',
            comment: 'This is comment section',
            cdate: "21/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'A789',
            comment: 'This is comment section',
            cdate: "22/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl:
              "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'C789',
            comment: 'This is comment section',
            cdate: "23/12/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'T789',
            comment: 'This is comment section',
            cdate: "21/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'A789',
            comment: 'This is comment section',
            cdate: "22/11/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl:
              "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          },
          {
            designCode: 'A789',
            comment: 'This is comment section',
            cdate: "23/12/2021",
            clientFeedBack: "Yes",
            deliveryStatus: "Yes",
            imageUrl: "https://static-01.daraz.pk/p/d7aa60912bbb790487e92e3698c61c34.jpg_340x340q80.jpg_.webp"
          }
        ]}
        actions={actions}
        options={
          {
            search: false,
            actionsColumnIndex: -1,
            headerStyle: { backgroundColor: '#e7dfdf8a', color: '#000', fontWeight: 'bold' },
            filtering: true,
            exportButton: true,
          }
        }
        icons={tableIcons}
      />
    </div>
  );
}