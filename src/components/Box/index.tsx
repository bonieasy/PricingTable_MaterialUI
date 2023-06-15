import { Check } from "@mui/icons-material";
import jsonData from "../../data/data.json";
import { Button, Card, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";

export function Box () {
    return(
      <>
      {jsonData.map((plan) => {
        return(
          
          <Card sx={{ maxWidth: 355, maxHeight: 470 }}>
          
            <Typography>{plan.name}</Typography>

            <Typography>R$ {plan.price}</Typography>

            <Typography>{plan.description}</Typography>
            
            <Divider variant="middle" />

              <List>
                {plan.benefits.map((benefit, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                  </ListItem>

                  )
                })}
                  
              </List>
           
            <Button variant="outlined">Subscribe</Button>
        </Card>
          
        )
      })}
      </>

        
    )
}


