import React from 'react'
import styled from '@emotion/styled'

import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Link as BaseLink,
  Card as BaseCard,
  Button as BaseButton,
} from 'rebass'
import {
  Heart as BaseHeart,
  MessageSquare as BaseMessageSquare,
} from 'react-feather'

const CardView = ({ children, otherProps }) => (
  <BaseCard
    width={['100vw', '70vw', '50vw', '30vw']}
    m={2}
    py={1}
    border={1}
    borderColor={'lightgrey'}
    borderRadius={1}
    {...otherProps}
  >
    {children}
  </BaseCard>
)

const StyledButton = styled(BaseButton)({
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.03)',
    opacity: 0.8,
  },
})

const Button = props => (
  <StyledButton width={[1 / 4]} mr={2} my={1} {...props} />
)

const Heart = styled(BaseHeart)({
  color: 'lightgrey',
  strokeWidth: '0.1rem',
  '&:hover': {
    cursor: 'pointer',
    color: 'red',
  },
})

const MessageSquare = styled(BaseMessageSquare)({
  color: 'lightgrey',
  strokeWidth: '0.1rem',
  '&:hover': {
    cursor: 'pointer',
    color: 'darkgrey',
  },
})

const Caps = props => (
  <Text
    {...props}
    sx={{
      fontSize: 0,
      textTransform: 'uppercase',
      fontWeight: 100,
      letterSpacing: '0.1rem',
    }}
  />
)

// Can also use template literals as well
// --------------------------------------
// const StyledCaps = styled(Text)`
//   font-size: ${props => props.theme.fontSizes[0]};
//   text-transform: uppercase;
//   font-weight: 100;
//   letter-spacing: 0.1rem;
// `

const StyledBadge = props => (
  <Box
    {...props}
    sx={{
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      height: '1.5rem',
      borderWidth: '0.2rem',
      borderStyle: 'solid',
      borderColor: 'red',
      borderRadius: '0.3rem',
    }}
  />
)

// const StyledBadge = styled(Box)({
//   display: 'flex',
//   alignItems: 'center',
//   alignContent: 'center',
//   height: '1.5rem',
//   borderWidth: '0.2rem',
//   borderStyle: 'solid',
//   borderColor: 'red',
//   borderRadius: '0.3rem',
// })

const Badge = ({ children }) =>
  parseInt(children) !== 0 ? (
    <StyledBadge ml={-3} mr={1} bg={'red'}>
      <Text fontSize={0} fontWeight="bold" color={'white'}>
        {children}
      </Text>
    </StyledBadge>
  ) : (
    ''
  )

const Avatar = ({ badge, ...props }) => (
  <Flex>
    <Image
      sx={{
        width: '4.8rem',
        height: '4.8rem',
        borderRadius: 2,
      }}
      {...props}
    />
    <Badge>{badge}</Badge>
  </Flex>
)

const CardHeader = ({ src, name, handle, badge }) => (
  <Flex flexDirection="row" alignItems="center" mx={2} my={1}>
    <Avatar src={src} mr={2} badge={badge} />
    <div>
      <Heading fontSize={2}>{name}</Heading>
      <Text color={'darkgrey'} fontSize={0}>
        {handle}
      </Text>
    </div>
  </Flex>
)

const Divider = styled('hr')({
  backgroundColor: 'lightgrey',
  margin: 2,
  border: 0,
  height: '0.1rem',
})

// Or as template literal using raw sx notation
// ---------------------------------------------
// const Divider = styled.hr`
//   background-color: ${props => props.theme.colors.lightgrey};
//   margin: ${props => props.theme.space[2]};
//   border: 0;
//   height: 0.1rem;
// `

const Label = ({ label }) => (
  <Text fontSize={0} color={'textgrey'}>
    {label}
  </Text>
)

const StyledInput = styled('input')({
  padding: 2,
  marginTop: 2,
  fontSize: 2,
  color: 'textgrey',
  border: '0.1rem solid',
  borderRadius: '0.5rem',
  borderColor: 'lightgrey',
  '::placeholder': {
    color: 'lightgrey',
  },
})

const Input = ({ label, ...otherProps }) => (
  <Flex m={2} flexDirection="column">
    {label ? <Label label={label} /> : ''}
    <StyledInput {...otherProps} />
  </Flex>
)

const Link = styled(BaseLink)({
  '&:hover': {
    textDecoration: 'underline',
  },
})

export const Card = () => (
  <CardView>
    <CardHeader
      src="https://s19.postimg.cc/wmz7ukyn7/avatar.jpg"
      name="Tony Johnson"
      handle="@tnyjhnsn"
      badge="9"
    />
    <Image
      src="https://source.unsplash.com/random/800x450/?nature"
      width="100%"
      mt={1}
      mb={2}
    />
    <Link href="#" fontSize={1} mx={2}>
      View More on Instagram
    </Link>
    <Divider />
    <Flex m={2} justifyContent="space-between">
      <Flex alignItems="center">
        <Heart />
        <Text ml={1} mr={2} color="darkgrey" fontSize={0}>
          27
        </Text>
      </Flex>
      <MessageSquare />
    </Flex>
    <Text fontSize={2} lineHeight={1.35} mb={3} mx={2} color="textgrey">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus commodi
      placeat, aperiam dicta quam quisquam corrupti nisi atque suscipit sunt
      perferendis porro facilis velit, laborum nobis itaque id numquam sit!
    </Text>
    <Input label="Here is a label" placeholder="email" />
    <Input type="password" placeholder="password" />
    <Flex justifyContent="flex-end">
      <Button variant="cancel">
        <Caps>Cancel</Caps>
      </Button>
      <Button variant="ok">
        <Caps>Ok</Caps>
      </Button>
    </Flex>
  </CardView>
)
