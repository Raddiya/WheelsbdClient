import React from 'react';
import { Card } from 'react-bootstrap';
import cycle from '../../Image/bike3.webp';

const Minicycle = () => {
    return (
        <div>
            <Card className="bg-dark text-dark">
                <Card.Img className='img-fluid' src={cycle} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title> <h1>Top selling part</h1> </Card.Title>
                    <Card.Text>
                        This the best sellling product of our warehouse.
                    </Card.Text>
                    
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Minicycle;