import { useCalculation } from "../context/Calculate"
import bg1 from "/image/bg-1.jpg";
import { FormControl, InputLabel, MenuItem, Select, Button, Dialog, DialogActions, DialogTitle, DialogContentText, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions';
import { FormEvent, useState, forwardRef } from "react";
import { Groom } from "../model/model";
import { useNavigate } from "react-router-dom";

const Transition = forwardRef(function Transition( props: TransitionProps & { children: React.ReactElement<any, any>;}, ref: React.Ref<unknown>,) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dowry = () => {

  const [greedy, setGreedy] = useState<Groom>({ age: "", country: "", education: "", profession: "", residence: "", salary: "" });
  const [dowry, setDowry] = useState<string | null>(null);
  const [dialog, toggleDialog] = useState(false)
  const navigate = useNavigate()

  const { calculateDowry, dowryOptions } = useCalculation()

  function handelSubmit(e: FormEvent) {
    e.preventDefault();
    calculateDowry(greedy).then((res) => {
      setDowry(dowryOptions[res]);
      if(dowryOptions[res]) {
        toggleDialog(true);
      }
    }).catch(err => {
      console.log(err)
    })
  }


  function disagree() {
    toggleDialog(false);
    navigate('/stop')
  }

  function change() {
    toggleDialog(false)
    navigate('/anti-dowry')
  }

  return (
    <main className="px-4 md:px-10 lg:px-16 xl:px-36 2xl:px-44 flex justify-center lg:justify-between items-center flex-col lg:flex-row min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="mb-20 lg:mb-0 text-center lg:text-left animate-fade-right animate-once animate-ease-linear">
        <h1 className="RobotoSlab text-4xl lg:text-5xl font-medium text-slate-800">
          India&apos;s AI dowry calculator
        </h1>
        <p className="Inter mt-2 text-sm font-semibold text-slate-700">Car? House? Gold? What&apos;s your worth?</p>
      </div>
      <div className="p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-300 animate-fade-left animate-once animate-ease-linear">
        <h4 className="MonsterRat text-2xl lg:text-3xl font-extrabold lg:font-black text-slate-700">Calculate your worth</h4>
        <form onSubmit={handelSubmit} className="grid grid-cols-2 mt-6 gap-4 w-full">
          <FormControl fullWidth required>
            <InputLabel id="select-age">Age</InputLabel>
            <Select labelId="select-age" label="Age" value={greedy.age} onChange={e => setGreedy({ ...greedy, age: e.target.value })}>
              <MenuItem value='18 - 24'>18 - 24 years</MenuItem>
              <MenuItem value='25 - 30'>25 - 30 years</MenuItem>
              <MenuItem value="31 - 35">31 - 35 years</MenuItem>
              <MenuItem value="36 - 40">36 - 40 years</MenuItem>
              <MenuItem value="More than 40">More than 40 years</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="select-education">Education</InputLabel>
            <Select labelId="select-education" label="Education" value={greedy.education} onChange={e => setGreedy({ ...greedy, education: e.target.value })}>
              <MenuItem value="High School">High School</MenuItem>
              <MenuItem value="Graduation">Graduation</MenuItem>
              <MenuItem value="Post Graduation">Post Graduation</MenuItem>
              <MenuItem value="PhD">PhD</MenuItem>
              <MenuItem value="Dropout">Dropout</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="select-Profession">Profession</InputLabel>
            <Select labelId="select-Profession" label="Profession" value={greedy.profession} onChange={e => setGreedy({ ...greedy, profession: e.target.value })}>
              <MenuItem value="Businessman">Businessman</MenuItem>
              <MenuItem value="Content Creator">Content Creator</MenuItem>
              <MenuItem value="Doctor">Doctor</MenuItem>
              <MenuItem value="Engineer">Engineer</MenuItem>
              <MenuItem value="Investor">Investor</MenuItem>
              <MenuItem value="Manager">Manager</MenuItem>
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="select-Income">Monthly Income</InputLabel>
            <Select labelId="select-Income" label="Monthly Income" value={greedy.salary} onChange={e => setGreedy({ ...greedy, salary: e.target.value })}>
              <MenuItem value="Less than 50,000">Less than 50,000</MenuItem>
              <MenuItem value="50,001 - 1Lakh">50,001 - 1Lakh</MenuItem>
              <MenuItem value="1 - 5 Lakhs">1 - 5 Lakhs</MenuItem>
              <MenuItem value="5 - 10 Lakhs">5 - 10 Lakhs</MenuItem>
              <MenuItem value="More than 10 Lakhs">More than 10 Lakhs</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="select-Residence">Residence</InputLabel>
            <Select labelId="select-Residence" label="Residence" value={greedy.residence} onChange={e => setGreedy({ ...greedy, residence: e.target.value })}>
              <MenuItem value="Self Owned">Self Owned</MenuItem>
              <MenuItem value="Parent's House">Parent's House</MenuItem>
              <MenuItem value="Rented">Rented</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="select-Country">Country</InputLabel>
            <Select labelId="select-Country" label="Country" value={greedy.country} onChange={e => setGreedy({ ...greedy, country: e.target.value })}>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="Abroad">Abroad</MenuItem>
            </Select>
          </FormControl>
          <div className="col-span-2 mt-">
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#334155' }}>CALCULATE</Button>
          </div>
        </form>
      </div>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => toggleDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>AI Generated Dowry for you</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Our model is trained over 50,000 Indian grooms data set, AI suggested suitable dowry for you is around
            <span className="mx-1 font-semibold">{dowry}</span>Indian rupees.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={change}>I Don&apos;t support dowry</Button>
          <Button onClick={disagree}>Disagree</Button>
        </DialogActions>
      </Dialog>
    </main>
  )
}

export default Dowry