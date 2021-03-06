# A short research on Chord Diagram

### 0. Top VIS Competition Demo [[Link](https://sysu-zjw.github.io/MSBD-2018Fall/5005/TopVIS/)]

### 1. Introduction
A [link](https://sysu-zjw.github.io/5005TopVIS/) to my presentation of top VIS to introduce Chord Diagram. 
In simple word, I think chord diagram is almost the best way to embed **directed connected graph**[1]. 
#### 1.1 Where I found Chord Diagram: 
[Using “Data Storytelling” with a chord diagram](https://www.visualcinnamon.com/portfolio/phone-brand-switching)

#### 1.2 The encoding scheme  & message conveys:
- Arc : the weight of instance (eg. market share of Apple, Samsung) 
- Chord: the link between every two instances in a graph
- Arc of Chord: the weight of directed link
- Color of Chord: Net gain, whose link weight is larger

#### 1.3 why impressive:
Directed connected graph is common, which makes this work flexible and useful. It become even more amazing with js. When we touch the arc, chords would be presented only if they are related to the arc, which helps us better understand how the instances relate to others.

### 2. Related Work
I fail to find any better insight nor design in Google Scholar, but I do find something impressive on other website. \
In this part, we will see how a directed connected graph can be embed better:

<table border=0 >
        <tr>
            <td width="30%" align="middle" valign="middle">
                <b> Directed Connected Graph </b>
            </td>
            <td width="20%"> <img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E1.png">
            </td>
            <td width="50%" align="middle" valign="middle">
                This is a <b>directed connected graph</b> showing how cellphone market share change between two timestamps.
            </td>
        </tr>
        <tr>
            <td width="30%" align="middle" valign="middle">
                <b> Normal Chord Diagram </b>
            </td>
            <td width="20%"> 
                <a href="https://sysu-zjw.github.io/5005TopVIS/">
                <img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Pre.png">
            </td>
            <td width="50%" align="middle" valign="middle">
                This is a <b>chord diagram</b> showing how cellphone market share change between two timestamps.
            </td>
        </tr>
        <tr>
            <td  width="30%" align="middle" valign="middle">  
                <b> Two Group of Knowledge </b>   <br /> 
                <b> Same Vertical Level </b>   <br />
                <b> Interact with each other [2] </b>   <br />  
            </td>
            <td width="20%"> <a href="https://www2.deloitte.com/nl/nl/pages/deloitte-analytics/articles/onderwijs-resultaten-2015-state-of-the-state.html"> <img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E2.png">
            </td>
        <td width="50%" align="middle" valign="middle">
                This is a <b>separate chord diagram</b>  showing how 2 <b>groups</b> of knowledge (features) <b>associate</b> with each other.
            </td>
        </tr>
        <tr>
            <td  width="30%" align="middle" valign="middle">  
                Two Group of Knowledge   <br /> 
                Same Vertical Level   <br />
                Interact with other <b>Attribute</b> [3]   <br />  
            </td>
            <td width="20%"> <a href="https://www.visualcinnamon.com/portfolio/words-lord-of-the-rings"> 
            <img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E3.png">
            </td>
            <td width="50%" align="middle" valign="middle">
                This is another seperate chord diagram showing how 2 groups of knowledge (features) <b>associate</b> with another group of attribute.
            </td>
        </tr>
        <tr>
            <td  width="30%" align="middle" valign="middle">  
                <b> Undirected Graph </b>   <br /> 
                <b> Multiple Vertical Level </b>   <br />
                 Interact with each other [4]  <br />  
            </td>
            <td width="20%"> <a href="http://vis.cse.ust.hk/demos/ust/"> 
            <img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E4.png">
            </td>
            <td width="50%" align="middle" valign="middle">
                This is not a chord diagram, but a very good example to use <b>vertical structure</b> to embed vertical domain of knowledge.
            </td>
        </tr>
</table>

### 3. Prospect
#### 3.1 Feature information interact --> Directed Connected Graph
<img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E5.png">
Recently, some works[5] point out that the current feature attribution methods for tree ensembles are inconsistent. Since information gain of a node is based on its parents, the relationship bewteen features is a directed connected graph, and chord diagram is a promising way to display feature knowledge. But whether it can guide data mining remains mystery, which makes its contribution hard to evaluate. 

#### 3.2 Stream of people transfer in school (Pulse of HKUST) --> Directed Connected Graph
<img src="https://github.com/sysu-zjw/MSBD-2018Fall/blob/master/img/5005Eassy/5005E6.png">
HKUST Pulse[6] is an excellent work which shows human flow transfer at HKUST in real time. Luckily, with the method above, we could still embed one more group of knowledge into Chord Diagram.<br/>

I will use mathematic formulation here to represent Chord Diagram. For example, Pulse of HKUST can be written in this way: <br/>

`T1(hall, bus, canteen, library, sports, acadmeic} <--> T2(hall, bus, canteen, library, sports, acadmeic)`  <br/>

where `T1` indicates 3 mins ago, `T2` indicates now.<br/>

With <b>separated chord diagram</b>, we can embed one more domain of knowledge, like displaying how {UG, PG, PhD} transfer: <br/>

`T1(hall, canteen, library, sports, acadmeic) <-- {PG, UG, PhD} --> T2(hall, canteen, library, sports, acadmeic)`  <br/>

or how people in different floors of library travel at lunch time, and we can indicate the availablity by hill:<br/>

`T(lg1, lg7, Mc) <--> T(lg1, lg3, lg4} `  <br/>




### 4. Reference
[1] Directed graph [[Link](https://en.wikipedia.org/wiki/Directed_graph)]\
[2] Hacking a chord diagram to visualize a flow [[Link](https://www.visualcinnamon.com/2015/08/stretched-chord.html)]\
[3] The words in the LotR [[Link](https://www.visualcinnamon.com/portfolio/words-lord-of-the-rings)]\
[4] Graph Demo [[Link](http://vis.cse.ust.hk/demos/ust/)]\
[5] Consistent Individualized Feature Atribution for Tree Ensembles [[Link](https://arxiv.org/pdf/1802.03888.pdf)]\
[6] HKUST Pulse [[Link](http://vis.cse.ust.hk/groups/pulse/)]