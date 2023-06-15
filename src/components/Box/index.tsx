import { Check } from "@mui/icons-material";
import jsonData from "../../data/data.json";
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { CardStyled } from "./style";

export function Box () {
    return(
      <>
      {jsonData.map((plan) => {
        return(

          <CardStyled sx={{ maxWidth: 355, minHeight: 470 }}>
          
            <Typography variant="h2" >{plan.name}</Typography>

            <Typography variant="h1" >R$ {plan.price}</Typography>

            <Typography>{plan.description}</Typography>
            
            <Divider variant="middle" />

              <List disablePadding>
                {plan.benefits.map((benefit, index) => {
                  return (
                    <ListItem disablePadding key={index}>
                      <ListItemIcon>
                        <Check sx={{ color: 'var(--green)' }} />
                      </ListItemIcon>
                      <ListItemText primary={benefit} sx={{ color: 'var(--gray-100)' }} />
                  </ListItem>
                  )
                })}
                  
              </List>
           
            <Button variant="outlined">Subscribe</Button>
        </CardStyled>
          
        )
      })}
      </>

        
    )
}


