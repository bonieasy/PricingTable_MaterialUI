import { Check } from "@mui/icons-material";
import jsonData from "../../data/data.json";
import { Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { CardStyled, FooterBox, ButtonSubscribe, Title } from "./style";

export function Box () {
    return(
      <>
      {jsonData.map((plan) => {
        return(

          <CardStyled sx={{ maxWidth: 355, minHeight: 470 }}>

            <Title className={`${plan.popular ? 'popular-header' : ''}`}>
              <Typography variant="h2" >{plan.name}</Typography>
            </Title>

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
           <FooterBox>
            <ButtonSubscribe variant="outlined">Subscribe</ButtonSubscribe>
          </FooterBox>
        </CardStyled>
          
        )
      })}
      </>

        
    )
}


